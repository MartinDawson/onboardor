using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IMemberService
    {
        void Add(Member member);
        void SetOnboarding(int memberId, bool isBeingOnboarded);
        Member GetMember(int memberId);
    }
}
