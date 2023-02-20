"use client";

import React, { ReactElement } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

// 유효성 검사를 위한 yup 라이브러리 기능 담음
const ValidationSchema = Yup.object().shape({
  title: Yup.string().required("이름은 필수항목입니다."),
  detail: Yup.string()
    .min(3, "3글자 이상 입력하세요")
    .required("상품 설명은 필수항목입니다."),
  email: Yup.string().email().required("email을 입력해주세요."),
  password: Yup.string().required("password를 입력해주세요."),
});

interface LeftFormValue {
  title: string;
  detail: string;
  price: number;
}

const initialValues = {
  title: "",
  detail: "",
  price: 0,
};

/* 참고로 <Formik> 컴포넌트에서 initialValues와 onSubmit은 필수값.
   <Form> 아래에 <Field>를 두고 props로 name을 initialValues의 키값으로 세팅하면 
   setState과 유효성 검사가 자동 설정됨. 
   <ErrorMessage>는 yup에서 정의해둔 에러메세지 표시해주는 곳. 
*/
export default function LeftForm() {
  const handleSubmit = (values: LeftFormValue) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            name="title"
            type="text"
            placeholder="상품 이름"
            className="form-input"
            form={""}
          />
          <Field
            name="price"
            type="number"
            placeholder="가격"
            className="form-input"
            form={""}
          />
          <Field
            name="detail"
            type="text"
            as="textarea"
            placeholder="상세 설명"
            className="form-input h-[150px]"
            form={""}
          />
          <button className="submit-button" type="submit">
            등록하기
          </button>
        </Form>
      </Formik>
    </>
  );
}
