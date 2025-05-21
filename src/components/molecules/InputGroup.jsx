import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';

const InputGroup = ({ label, type = 'text', isTextarea = false, ...props }) => (
  <div className="space-y-1">
    <label className="block font-medium">{label}</label>
    {isTextarea ? (
      <Textarea {...props} />
    ) : (
      <Input type={type} {...props} />
    )}
  </div>
);

export default InputGroup;
