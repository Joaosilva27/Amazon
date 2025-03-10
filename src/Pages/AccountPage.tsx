import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export default function AccountPage() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-[#cbddc6] rounded-xl bg-[#f0f7ed] p-8">
            {/* Profile header */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <img
                src={user?.photoURL || "/default-avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-[#cbddc6]"
              />
              <div className="text-center">
                <h1 className="text-3xl font-bold text-[#4d5c55]">
                  {user?.displayName || "Prime Member"}
                </h1>
                <p className="text-[#6b7d76] mt-2">{user?.email}</p>
              </div>
            </div>

            {/* Account details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#4d5c55] border-b-2 border-[#cbddc6] pb-2">
                  Account Details
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b7d76]">Account Status</span>
                    <span className="text-[#4d5c55] font-medium">Active</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#6b7d76]">Member Since</span>
                    <span className="text-[#4d5c55]">
                      {user?.metadata.creationTime || "2023-01-01"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#4d5c55] border-b-2 border-[#cbddc6] pb-2">
                  Prime Membership
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#6b7d76]">Membership Tier</span>
                    <span className="text-[#4d5c55] font-medium">Premium</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#6b7d76]">Renewal Date</span>
                    <span className="text-[#4d5c55]">2024-12-31</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign out */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  auth.signOut();
                  navigate("/");
                }}
                className="px-6 py-3 text-white bg-[#cbddc6] rounded-lg font-semibold hover:bg-[#9ab096] transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
