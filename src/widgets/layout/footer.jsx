import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ Silvanus, SilvanusLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 py-2 bg-white shadow-md">
      <div className="flex w-full justify-between items-center px-4">
        <Typography variant="small" className="font-normal text-inherit" mx-8>
          &copy; {year}, made with{" "}
          <HeartIcon className=" inline-block h-3.5 w-3.5 text-red-600" /> by{" "}
          <a
            href={SilvanusLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {Silvanus}
          </a>{" "}
          for a better change.
        </Typography>
        <ul className="flex items-center gap-8 mx-8">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}



Footer.defaultProps = {
  Silvanus: "Silvanus",
  SilvanusLink: "https://github.com/SalasDelil/vf_monitoring_dashboard",
  routes: [
    { name: "Github", path: "https://github.com/SalasDelil/vf_monitoring_dashboard" },
    { name: "About Us" },
    { name: "Blog" },
    { name: "License", },
  ],
};

Footer.propTypes = {
  Silvanus: PropTypes.string,
  SilvanusLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
