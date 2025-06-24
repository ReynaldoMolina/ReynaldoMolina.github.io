import emailjs from '@emailjs/browser'
import { useRef } from 'react';

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9qc26sb',
      'template_27vri2s',
      formRef.current,
      'e4yjaEGSESTTfjf1T'
    )
    .then((result) => {
      alert("Message sent!");
    })
    .catch((error) => {
      alert("Something went wrong: " + error.text);
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex md:w-[50%] flex-col gap-7 bg-white dark:bg-neutral-700/90 dark:border-neutral-600 rounded-xl p-10 border border-neutral-200 shadow-xl">
      <input required autoComplete="off" autoCapitalize="words" className="h-13 bg-neutral-100 dark:bg-neutral-600 rounded-lg px-7" type="text" name="name" placeholder="Name"></input>
      <input required autoComplete="off" className="h-13 bg-neutral-100 dark:bg-neutral-600 rounded-lg px-7" type="email" name="email" placeholder="youremail@mail.com"></input>
      <textarea required autoComplete="off" className="h-13 bg-neutral-100 dark:bg-neutral-600 rounded-lg px-7 py-3" name="message" placeholder="Message"></textarea>
      <button type="submit" className="bg-indigo-600 rounded-xl p-3 text-white cursor-pointer hover:scale-103 transition font-semibold">Start Conversation</button>
    </form>
  );
}
