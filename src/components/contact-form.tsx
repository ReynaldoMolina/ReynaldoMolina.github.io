import emailjs from "@emailjs/browser";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { FieldGroup, FieldSet } from "./ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./ui/form";
import { FormInput } from "./form-input";
import { FormTextArea } from "./form-text-area";
import { useRef } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Required").max(50),
  email: z.string().email(),
  message: z.string().min(1, "Required"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail();
  }

  async function sendEmail() {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_9qc26sb",
        "template_27vri2s",
        formRef.current,
        "e4yjaEGSESTTfjf1T"
      );
      toast.success("Message sent!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardContent>
            <FieldGroup>
              <FieldSet {...form.control}>
                <FormInput control={form.control} name="name" label="Name" />
                <FormInput control={form.control} name="email" label="Email" />
                <FormTextArea
                  control={form.control}
                  name="message"
                  label="Message"
                />
              </FieldSet>
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button type="submit">Start Conversation</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
