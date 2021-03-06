import PropTypes from 'prop-types';
import Link from 'next/link';

const AppButton = ({ title, href, className }) => (
  <Link href={href} passHref>
    <a
      className={`inline-block w-max p-0 mt-6 border border-orange rounded  ${className}`}
    >
      <span
        className={`inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold  py-3 px-9 bg-orange hover:bg-gray text-white hover:text-white transition duration-300 `}
      >
        {title}
      </span>
    </a>
  </Link>
);

AppButton.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

AppButton.defaultProps = {
  title: 'BUTTON',
  href: '/',
  className: '',
};

export default AppButton;
