import React from "react";

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
