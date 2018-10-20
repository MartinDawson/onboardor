using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public interface IMemberService
    {
        void Add(Member member);
        void Remove(Member member);
        void Update(Member member);
        Member GetMember(int memberId);
    }
}
