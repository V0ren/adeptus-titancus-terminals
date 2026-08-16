const baseClassName =
  "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

export default function Button({
  className = "",
  type = "button",
  ...props
}: React.ComponentProps<"button">) {
  return <button type={type} className={`${baseClassName} ${className}`} {...props} />;
}
