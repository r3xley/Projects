"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface HeaderProps {
    children: React.ReactNode;
    className?: string
}


const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const authModal = useAuthModal();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();


    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();

        router.refresh();

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Logged Out!')
        }


    }
    return (
        <div
            className={twMerge(`
        h-fit
        bg-gradient-to-b
        from-cyan-500
        p-6
        `,
                className



            )}
        >
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between 
            ">
                <div className="
                hidden
                md:flex
                gap-x-2
                items-center
                ">
                    <button
                        onClick={() => router.back()}
                        className="
                    rounded-full 
              bg-neutral-900 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
                    
                    
                    
                    ">
                        <RxCaretLeft className="text-cyan-500" size={35} />
                    </button>
                    <button
                        onClick={() => router.forward()}
                        className="
                    rounded-full 
              bg-neutral-900 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
                    
                    
                    
                    ">
                        <RxCaretRight className="text-cyan-500" size={35} />
                    </button>

                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="
                    rounded-full
                    p-2
                    bg-neutral-900
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    ">
                        <HiHome className="text-cyan-500" size={20} />
                    </button>
                    <button className="
                    rounded-full
                    p-2
                    bg-neutral-900
                    flex
                    items-center
                    justify-center
                    hover:opacity-75
                    transition
                    ">
                        <BiSearch className="text-cyan-500" size={20} />
                    </button>


                </div>
                <div className="
                flex
                justify-between
                items-center
                gap-x-4
                ">
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <Button
                                onClick={handleLogout}
                                className="bg-neutral-900 px-6 py-2
                                text-cyan-500"
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className="bg-neutral-900
                                text-cyan-500
                                "
                            >
                                <FaUserAlt />
                            </Button>

                        </div>

                    ) : (
                        <>
                            <div>

                                <Button
                                    onClick={authModal.onOpen}
                                    className="
                         bg-transparent
                         text-white
                         font-medium
                         
                        
                        "
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div>

                                <Button
                                    onClick={authModal.onOpen}
                                    className="
                        bg-neutral-900
                        text-cyan-500
                        px-6
                        py-2
                        
                        
                        ">
                                    Log In
                                </Button>
                            </div>
                        </>
                    )}

                </div>

            </div>
            {children}

        </div>
    );
}
export default Header;