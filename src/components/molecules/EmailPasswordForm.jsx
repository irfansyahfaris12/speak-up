import Input from '../atoms/Input';

const EmailPasswordForm = ({ email, setEmail, password, setPassword }) => (
  <div className="space-y-4">
    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
  </div>
);

export default EmailPasswordForm;
