import classes from './RegisterCTA.module.scss';
import Link from "next/link";

const RegisterCTA = () => {
  return (
    <div className={classes.RegisterCTA}>
      <Link href={`https://www.tourn.io/tournaments/shiftid-2023`}
            className={`btn btn-lg`}
      >
        Register
      </Link>
    </div>
  )
}

export default RegisterCTA;
