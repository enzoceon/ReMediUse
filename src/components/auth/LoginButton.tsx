
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

interface LoginButtonProps {
  onLogin: () => void;
}

const LoginButton = ({ onLogin }: LoginButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className="w-full flex items-center justify-center gap-2 border-gray-300"
      onClick={onLogin}
    >
      <GoogleIcon className="h-5 w-5" />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default LoginButton;
