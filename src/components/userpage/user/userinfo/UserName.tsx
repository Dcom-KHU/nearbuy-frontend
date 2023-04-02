interface UserNameProps {
  name?: string;
}

export default function UserName({ name }: UserNameProps) {
  return (
    <p className='hover:cursor-pointer'>{name ?? '사용자 이름이 없어요'}</p>
  );
}
