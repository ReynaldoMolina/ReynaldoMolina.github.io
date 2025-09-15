import { contact } from '../../assets/data/contact';

export default function ContactLinks() {
  return (
    <div className="flex gap-5 mx-auto">
      {contact.map(({ name, link, Icon }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 rounded-full p-2 hover:scale-110 transition"
        >
          <Icon className="size-5 cursor-pointer" />
        </a>
      ))}
    </div>
  );
}
