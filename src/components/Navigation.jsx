const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {['About', 'Experience', 'Projects', 'Skills'].map((item, index) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              <span className="text-primary opacity-30 font-mono text-xs">{index === 0 ? '//' : index === 1 ? '{' : index === 2 ? '<' : '['}</span>
              {item}
              <span className="text-primary opacity-30 font-mono text-xs">{index === 0 ? '' : index === 1 ? '}' : index === 2 ? '/>' : ']'}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

