export default function InputFiledForm(filed) {
  const { id, label, placeholder } = filed;
  return (
    <div key={id} className="w-full flex flex-col gap-3">
      <label htmlFor={id} className="capitalize text-sm sm:text-xl md:text-xl">
        {label}
      </label>
      <input
        type="text"
        id={id}
        className="w-full h-[60px] rounded-xl border border-[#A7A7A7] p-3 text-sm outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
