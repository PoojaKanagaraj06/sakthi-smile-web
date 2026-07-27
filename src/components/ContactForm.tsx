import { useState } from "react";
import { Button } from "./Button";
import { HiCheckCircle } from "react-icons/hi";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone";
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  const field = (name: keyof typeof form, label: string, type = "text", isTextarea = false) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          aria-invalid={!!errors[name]}
        />
      ) : (
        <input
          id={name}
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          aria-invalid={!!errors[name]}
        />
      )}
      {errors[name] && <p className="text-xs text-destructive mt-1">{errors[name]}</p>}
    </div>
  );

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <HiCheckCircle className="mx-auto text-primary" size={48} />
        <h3 className="font-semibold text-xl mt-3">Thank you!</h3>
        <p className="text-muted-foreground text-sm mt-2">
          Your message has been received. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm text-primary font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-surface p-6 md:p-8 space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        {field("name", "Full Name")}
        {field("phone", "Phone", "tel")}
      </div>
      {field("email", "Email", "email")}
      {field("message", "Message", "text", true)}
      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
