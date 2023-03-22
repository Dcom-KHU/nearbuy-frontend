import { FieldValues, UseFormRegister } from "react-hook-form";

interface GetLocationProps {
  register: UseFormRegister<FieldValues>;
  locations?: string[];
}

const GetLocation = (props: GetLocationProps) => {
  const { register, locations } = props;

  return (
    <>
      <input
        placeholder="거래 희망 장소 선택(임시 input란)"
        className="form-input"
        type="text"
        {...register("location", { required: true })}
      />
      <textarea placeholder="거래 희망 장소" className="form-input h-[150px]" />
    </>
  );
};

export default GetLocation;
