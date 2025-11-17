const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

