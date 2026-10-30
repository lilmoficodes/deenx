
import { Link } from "@tanstack/solid-router";
import SignupBiometrics from "../biometric";
import { BsDiscord, BsGoogle } from "solid-icons/bs";
import { SiKick } from "solid-icons/si";

export default function SignupBeforeAuth() {
    return (
        <main class="relative isolate min-h-screen overflow-hidden  px-2 py-10">
            {/* Ambient neon lighting behind the form */}
            <div
                aria-hidden="true"
                class="pointer-events-none absolute 
                left-1/2 top-64 -z-10 h-72 w-72 -translate-x-1/2
                 rounded-full bg-linear-to-r from-white md:from-black via-violet-600 to-fuchsia-500 blur-3xl md:blur-[5rem]"
            />

            <div class="mx-auto w-full max-w-2xl">
                <form
                    class="mt-24 flex flex-col md:gap-y-3 overflow-visible rounded-3xl px-6 py-8 max-w-full min-w-full
                    md:shadow-[-15px_0_8rem_1.5rem_rgba(139,92,246,0.55),15px_0_6rem_1rem_rgba(236,72,153,0.40),0_20px_6rem_-15px_rgba(168,85,247,0.45)]
                     shadow-[-15px_0_5rem_-20px_rgba(139,92,246,0.55),15px_0_3rem_-20px_rgba(236,72,153,0.40),0_20px_6rem_-15px_rgba(168,85,247,0.45)]
                    sm:px-8"
                >
                    <div class="mb-4 text-center">
                        <h2 class="text-2xl font-semibold tracking-tight  sm:text-3xl">
                            Hi, new user
                        </h2>

                        <p class="mt-2 text-sm">
                            Sign up to explore DeenX
                        </p>
                    </div>

                    <label
                        for="email"
                        class="text-sm font-medium"
                    >
                        Email address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="example@example.com"
                        required
                        class="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-base text-white outline-none  transition focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/20"
                    />

                    <label
                        for="password"
                        class="mt-2 text-sm font-medium "
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        placeholder="**********************"
                        required
                        class="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-base text-white outline-none  transition focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-500/20"
                    />
                    <button
                        type="submit"
                        class="login-signup-btn mt-4"
                    >
                        Signup
                    </button>
                    <div class="flex justify-center gap-x-5 mt-2 items-center">
                        <BsGoogle />
                        <SiKick />
                        <BsDiscord />
                    </div>
                    <p class="mt-4 text-center text-sm ">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            class="font-medium  underline decoration-white/30 underline-offset-4 transition hover:decoration-fuchsia-300"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
