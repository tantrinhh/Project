import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Test = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state?.order; // Nhận dữ liệu từ state

    // Nếu không có dữ liệu, điều hướng về trang chủ
    if (!orderData) {
        navigate("/");
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Tiêu đề */}
                <div className="bg-blue-500 text-white py-4 px-6">
                    <h1 className="text-3xl font-bold">Thông tin đơn hàng</h1>
                    <p className="text-sm mt-1">Cảm ơn bạn đã đặt hàng! Dưới đây là thông tin chi tiết:</p>
                </div>

                {/* Nội dung chính */}
                <div className="p-6">
                    {/* Thông tin người nhận */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Thông tin người nhận</h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium text-gray-700">Họ và tên: </span>
                                <span className="text-gray-600">{orderData.firstName} {orderData.lastName}</span>
                            </p>
                            <p>
                                <span className="font-medium text-gray-700">Số điện thoại: </span>
                                <span className="text-gray-600">{orderData.phone}</span>
                            </p>
                        </div>
                    </div>

                    {/* Địa chỉ giao hàng */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Địa chỉ giao hàng</h2>
                        <p className="text-gray-600">
                            {orderData.streetAddress}, {orderData.ward}, {orderData.district}, {orderData.city}
                        </p>
                    </div>

                    {/* Chi tiết sản phẩm */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Chi tiết sản phẩm</h2>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="py-2 px-4 text-sm font-semibold text-gray-600">Tên sản phẩm</th>
                                    <th className="py-2 px-4 text-sm font-semibold text-gray-600">Số lượng</th>
                                    <th className="py-2 px-4 text-sm font-semibold text-gray-600">Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-4 text-gray-700">{orderData.productName}</td>
                                    <td className="py-2 px-4 text-gray-700">{orderData.totalItem}</td>
                                    <td className="py-2 px-4 text-gray-700">{orderData.totalPrice.toLocaleString("vi-VN")} VND</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Nút quay lại */}
                    <div className="flex justify-end">
                        <button
                            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-300"
                            onClick={() => navigate("/")}
                        >
                            Quay lại trang chủ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
