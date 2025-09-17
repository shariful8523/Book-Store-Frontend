import { useEffect, useState } from "react";
import { Signup } from "../assets/dummystyles";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const SignUp = () => {

    const [formData, setFormData] = useState({ username: '', email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [toast, setToast] = useState({ visible: false, message: '', type: '' })
    const navigate = useNavigate()

    // TOAST TIMER AND REDIRECT TO LOGIN

    useEffect(() => {
        if (toast.visible) {
            const timer = setTimeout(() => {
                setToast({ visible: false, message: '', type: '' })
                if (toast.type === 'success') navigate('/login')
            }, 3000)
            return () => clearTimeout(timer)
        }

    }, [toast, navigate])

    const handelSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData
        if (!username.trim() || !email.trim() || !password.trim()) {
            setToast({ visible: true, message: "All fields are required", type: 'error' });
            return;
        }
        setToast({ visible: true, message: 'Creating Account...', type: 'info' })
        setTimeout(() => {
            setToast({ visible: true, message: 'Account created', type: 'success' })
        }, 2000)
    }


    return (

        <div className={Signup.container}>
            {toast.visible && (
                <div className={`${Signup.toastBase} ${toast.type === 'success' ? Signup.toastSuccess : Signup.toastError}`}>
                    {toast.message}
                </div>
            )}

            <div className={Signup.card}>
                <Link to='/' className={Signup.backLink}>
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Home
                </Link>

                <div className="text-center mb-8">
                    <div className={Signup.iconContainer}>
                        <User className="h-6 w-6 text-[#43C6AC]" />
                    </div>
                    <h1 className={Signup.heading}>Create Account</h1>
                    <p className={Signup.subtext} >Join our community of book lovers</p>
                </div>

                <form onSubmit={handelSubmit} className={Signup.form}>
                    <div>
                        <label className={Signup.label}>UserName</label>
                        <div className={Signup.inputWrapper}>
                            <User className={Signup.iconLeft} />
                            <input type="text" name="username" placeholder="Enter username" className={Signup.input}
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                        </div>
                    </div>

                    <div>
                        <label className={Signup.label}>Email</label>
                        <div className={Signup.inputWrapper}>
                            <Mail className={Signup.iconLeft} />
                            <input type="email" name="email" placeholder="email@example.com" className={Signup.input}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                    </div>

                    <div>
                        <label className={Signup.label}>Password</label>
                        <div className={Signup.inputWrapper}>
                            <Lock className={Signup.iconLeft} />
                            <input type={showPassword ? 'text' : 'password'}
                                name="password" placeholder="*********" className={Signup.passwordInput}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                            <button type="button" onClick={() => setShowPassword(!showPassword)}
                                className={Signup.togglePassword} >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <button className={Signup.submitBtn}>
                        Create Account
                    </button>
                </form>

                <div className={Signup.footerText}>
                    Already have an account? {' '}
                    <Link to='/login' className={Signup.link} >
                        Sing in
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SignUp;