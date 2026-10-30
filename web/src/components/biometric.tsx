
import { createSignal, For } from "solid-js";

const options = [
    { id: "fingerprint", label: "Fingerprint" },
    { id: "face", label: "Face recognition" },
    { id: "passkey", label: "Passkey" },
];

export default function SignupBiometrics() {
    const [selected, setSelected] = createSignal("fingerprint");

    return (
        <div class="mt-6 w-full">
            <div class="mb-3 flex items-center justify-between gap-3">
                <div>
                    <h3 class="text-sm font-semibold">
                        Biometric sign-in
                    </h3>
                    <p class="mt-1 text-xs text-neutral-400">
                        Choose your preferred method
                    </p>
                </div>

            </div>

            <div class="grid grid-cols-3 gap-2">
                <For each={options}>
                    {(option) => (
                        <button
                            type="button"
                            aria-pressed={selected() === option.id}
                            onClick={() => setSelected(option.id)}
                            class={`flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border px-2 py-4 text-center transition ${
                                selected() === option.id
                                    ? "border-fuchsia-400/70 bg-gradient-to-br from-violet-600/20 to-fuchsia-500/15 text-white shadow-[0_0_24px_-10px_rgba(217,70,239,0.6)]"
                                    : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-violet-400/40 hover:text-white"
                            }`}
                        >
                            {option.id === "fingerprint" && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    class="size-7"
                                    aria-hidden="true"
                                >
                                    <path d="M12 11a2 2 0 0 0-2 2c0 3-.5 5-1.5 7M15 13c0 2.5-.3 4.5-1 6M6.5 18C7.5 16 8 14 8 12a4 4 0 0 1 8 0M5 14a7 7 0 0 1 14 0M3.5 11a8.5 8.5 0 0 1 17 0" stroke-linecap="round" />
                                </svg>
                            )}

                            {option.id === "face" && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    class="size-7"
                                    aria-hidden="true"
                                >
                                    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3M21 16v3a2 2 0 0 1-2 2h-3" stroke-linecap="round" />
                                    <circle cx="9" cy="10" r="1" fill="currentColor" />
                                    <circle cx="15" cy="10" r="1" fill="currentColor" />
                                    <path d="M9 15c2 2 4 2 6 0" stroke-linecap="round" />
                                </svg>
                            )}

                            {option.id === "passkey" && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    class="size-7"
                                    aria-hidden="true"
                                >
                                    <circle cx="8" cy="15" r="5" />
                                    <path d="m11.5 11.5 8-8L22 6l-3 3 2 2-3 3-2-2-2.5 2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            )}

                            <span class="text-xs font-medium leading-tight">
                                {option.label}
                            </span>
                        </button>
                    )}
                </For>
            </div>

            <p class="mt-3 text-xs leading-relaxed text-neutral-500 text-center">
                Your device handles biometric verification.
                Fingerprint or face availability depends on your device.
            </p>
        </div>
    );
}
