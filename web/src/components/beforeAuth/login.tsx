
import { Link } from "@tanstack/solid-router";

export default function LoginBeforeAuth() {
    return (
        <main class="relative isolate min-h-screen overflow-hidden bg-black px-2 py-10">
            {/* Ambient neon lighting behind the form */}
            <div
                aria-hidden="true"
                class="pointer-events-none absolute 
                left-1/2 top-64 -z-10 h-72 w-72 -translate-x-1/2
                 rounded-full bg-linear-to-r from-white via-violet-600 to-fuchsia-500 blur-[4rem] md:blur-[7rem]"
            />

            <div class="mx-auto w-full max-w-2xl">
                <section class="mt-5 flex flex-col items-center text-center">
                    <h1 class="font-neue text-5xl tracking-tight sm:text-6xl">
                        deenx
                    </h1>

                    <p class="mt-4 text-xl font-medium tracking-tight sm:text-2xl">
                        The Digital Islamic Hub
                    </p>

                    <p class="mt-2 text-sm text-neutral-400 sm:text-base">
                        There is more to Islam than you know.
                    </p>
                </section>

                <form
                    class="mt-12 flex flex-col md:gap-y-3 overflow-visible rounded-3xl px-6 py-8 max-w-full min-w-full
                    md:shadow-[-15px_0_7rem_-20px_rgba(139,92,246,0.55),15px_0_5rem_-20px_rgba(236,72,153,0.40),0_20px_2rem_-15px_rgba(168,85,247,0.45)]
                     shadow-[-15px_0_2rem_-20px_rgba(139,92,246,0.55),15px_0_1rem_-20px_rgba(236,72,153,0.40),0_20px_2rem_-15px_rgba(168,85,247,0.45)]
                    sm:px-8"
                >
                    <div class="mb-4 text-center">
                        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                            Welcome back
                        </h2>

                        <p class="mt-2 text-sm text-neutral-400">
                            Sign in to continue with DeenX
                        </p>
                    </div>

                    <label
                        for="email"
                        class="text-sm font-medium text-neutral-200"
                    >
                        Email address
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        placeholder="Enter your email"
                        required
                        class="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-base text-white outline-none placeholder:text-neutral-500 transition focus:border-violet-400/70 focus:ring-2 focus:ring-violet-500/20"
                    />

                    <label
                        for="password"
                        class="mt-2 text-sm font-medium text-neutral-200"
                    >
                        Password
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        placeholder="Enter your password"
                        required
                        class="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-base text-white outline-none placeholder:text-neutral-500 transition focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-500/20"
                    />

                    <button
                        type="submit"
                        class="login-signup-btn mt-4 w-full"
                    >
                        Login
                    </button>

                    <p class="mt-4 text-center text-sm text-neutral-400">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            class="font-medium text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-fuchsia-300"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}
