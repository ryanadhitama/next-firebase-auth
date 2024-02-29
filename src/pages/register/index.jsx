import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Register</h1>
        </div>
        <form>
          <div className="mb-4">
            <label>Email</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="email"
              name="email"
              value={form?.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="password"
              name="password"
              value={form?.password}
              onChange={onChange}
            />
          </div>
          <button
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200 w-full"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
      <Head>
        <title>Register</title>
      </Head>
    </>
  );
}
