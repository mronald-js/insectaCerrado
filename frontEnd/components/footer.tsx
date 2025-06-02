export default function Footer() {
    return (
        <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} InsectaCerrado. All rights reserved.
            </p>
            <p className="text-xs mt-2">
            Sistema de catalogação de insetos do Cerrado Brasileiro por INF - UFG
            </p>
        </div>
        </footer>
    );
}