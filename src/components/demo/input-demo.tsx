import { ControlledTextInput, Text, TextInput } from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.email('올바른 이메일 형식이 아닙니다'),
});

type EmailForm = z.infer<typeof emailSchema>;

export function InputDemo() {
  const { control } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
    mode: 'onBlur',
  });

  return (
    <>
      <Text variant="subtitle">TextInput</Text>
      <TextInput label="이메일" placeholder="example@mail.com" keyboardType="email-address" />
      <TextInput label="비밀번호" placeholder="8자 이상" secureTextEntry />
      <TextInput label="에러 상태" placeholder="입력하세요" error="필수 항목입니다" />

      <Text variant="subtitle">ControlledTextInput</Text>
      <ControlledTextInput<EmailForm>
        control={control}
        name="email"
        label="이메일 (zod 검증)"
        placeholder="example@mail.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </>
  );
}
