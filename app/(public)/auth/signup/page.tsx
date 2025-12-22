"use client";
import { toast } from "sonner";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  X,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { signUpApi } from "@/lib/api/userAuth/userAuthApi";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  // We aren't submitting, but we need these state variables to handle the UI logic requested
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error State
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  // Password Logic
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLengthValid = password.length >= 8;

  const calculateStrength = () => {
    let score = 0;
    if (isLengthValid) score++;
    if (hasUpperCase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    return score; // 0 to 4
  };

  const strength = calculateStrength();

  const getStrengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength === 2) return "bg-yellow-500";
    if (strength >= 3) return "bg-emerald-500";
    return "bg-gray-700";
  };

  const getStrengthLabel = () => {
    if (strength <= 1) return "Weak";
    if (strength === 2) return "Medium";
    if (strength >= 3) return "Strong";
    return "";
  };

  const handleSignUp = async () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    // 1. Name Validation
    if (!name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // 3. Password Match Validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // 4. Password Strength Validation (Optional but recommended)
    if (strength < 3) {
      newErrors.password = "Password is too weak. Please satisfy all rules.";
    }

    setErrors(newErrors);

    // If no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true);
        const signUp = await signUpApi({ name, email, password });
        if (signUp.code === 201 && signUp.success) {
          toast.success(
            "Registration completed please check your email for verification"
          );
        }
        window.location.href = "/auth/login";
      } catch (error: any) {
        console.log(error);
        const message =
          error.response.data.message || "Account creation failed!";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full bg-transparent text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Create Account
        </h1>
        <p className="text-gray-400 text-sm">
          Join Finura and master your financial future today.
        </p>
      </div>

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        {/* Name Input */}
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-gray-300 ml-1"
            htmlFor="name"
          >
            Full Name
          </label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
              <User size={18} />
            </div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className={`w-full bg-white/5 border ${
                errors.name ? "border-red-500" : "border-white/10"
              } rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-500 ml-1">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-gray-300 ml-1"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
              <Mail size={18} />
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className={`w-full bg-white/5 border ${
                errors.email ? "border-red-500" : "border-white/10"
              } rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans`}
              placeholder="name@example.com"
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-500 ml-1">{errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-gray-300 ml-1"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-white/5 border ${
                errors.password ? "border-red-500" : "border-white/10"
              } rounded-lg py-3 pl-10 pr-10 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500 ml-1">{errors.password}</p>
          )}

          {/* Password Strength Visualization */}
          {password.length > 0 && (
            <div className="space-y-2 mt-2 pt-1 px-1">
              {/* Strength Bar */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-400">Strength</span>
                <span
                  className={`text-xs font-medium ${
                    strength >= 3
                      ? "text-emerald-400"
                      : strength === 2
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {getStrengthLabel()}
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden flex gap-0.5">
                {/* Segment 1 */}
                <div
                  className={`h-full flex-1 rounded-l-full transition-all duration-300 ${
                    strength >= 1
                      ? strength === 1
                        ? "bg-red-500"
                        : strength === 2
                        ? "bg-yellow-500"
                        : "bg-emerald-500"
                      : "bg-transparent"
                  }`}
                />
                {/* Segment 2 */}
                <div
                  className={`h-full flex-1 transition-all duration-300 ${
                    strength >= 2
                      ? strength === 2
                        ? "bg-yellow-500"
                        : "bg-emerald-500"
                      : "bg-transparent"
                  }`}
                />
                {/* Segment 3 */}
                <div
                  className={`h-full flex-1 rounded-r-full transition-all duration-300 ${
                    strength >= 3 ? "bg-emerald-500" : "bg-transparent"
                  }`}
                />
              </div>

              {/* Password Rules List */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    hasUpperCase ? "text-emerald-400" : "text-gray-500"
                  }`}
                >
                  {hasUpperCase ? (
                    <Check size={12} />
                  ) : (
                    <div className="w-3 h-3 rounded-full border border-gray-600" />
                  )}
                  Uppercase
                </div>
                <div
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    hasNumber ? "text-emerald-400" : "text-gray-500"
                  }`}
                >
                  {hasNumber ? (
                    <Check size={12} />
                  ) : (
                    <div className="w-3 h-3 rounded-full border border-gray-600" />
                  )}
                  Number
                </div>
                <div
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    hasSpecial ? "text-emerald-400" : "text-gray-500"
                  }`}
                >
                  {hasSpecial ? (
                    <Check size={12} />
                  ) : (
                    <div className="w-3 h-3 rounded-full border border-gray-600" />
                  )}
                  Special Char
                </div>
                <div
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    isLengthValid ? "text-emerald-400" : "text-gray-500"
                  }`}
                >
                  {isLengthValid ? (
                    <Check size={12} />
                  ) : (
                    <div className="w-3 h-3 rounded-full border border-gray-600" />
                  )}
                  8+ Characters
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-1">
          <label
            className="text-sm font-medium text-gray-300 ml-1"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-400 transition-colors">
              <Lock size={18} />
            </div>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full bg-white/5 border ${
                errors.confirmPassword ||
                (confirmPassword && password !== confirmPassword)
                  ? "border-red-500"
                  : confirmPassword && password === confirmPassword
                  ? "border-emerald-500"
                  : "border-white/10"
              } rounded-lg py-3 pl-10 pr-10 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-sans`}
              placeholder="••••••••"
            />
            {confirmPassword && (
              <div
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${
                  password === confirmPassword
                    ? "text-emerald-500"
                    : "text-red-500"
                }`}
              >
                {password === confirmPassword ? (
                  <Check size={18} />
                ) : (
                  <X size={18} />
                )}
              </div>
            )}
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-red-500 ml-1">
              {errors.confirmPassword}
            </p>
          )}
          {/* Real-time feedback messages */}
          {confirmPassword &&
            password !== confirmPassword &&
            !errors.confirmPassword && (
              <p className="text-xs text-red-400 ml-1">
                Passwords do not match
              </p>
            )}
          {confirmPassword && password === confirmPassword && (
            <p className="text-xs text-emerald-400 ml-1">Passwords match</p>
          )}
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#108981] hover:bg-[#0d746d] text-white font-semibold rounded-lg shadow-lg shadow-emerald-900/20 transition-all duration-200 transform hover:scale-[1.01] flex items-center justify-center gap-2 mt-4 cursor-pointer"
        >
          {loading ? "Creating Account..." : "Create Account"}
          {loading ? <Loader2 size={18} /> : <ArrowRight size={18} />}
        </button>
      </form>

      {/* Sign In Link */}
      <div className="mt-8 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/auth/signin"
          className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
