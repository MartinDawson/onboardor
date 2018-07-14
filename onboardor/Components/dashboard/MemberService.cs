using Microsoft.EntityFrameworkCore;
using Onboardor.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.dashboard
{
    public class MemberService : IMemberService
    {
        private IRepository<Member> _repository;

        public MemberService(IRepository<Member> repository)
        {
            _repository = repository;
        }

        public void SetOnboarding(int memberId, bool isBeingOnboarded)
        {
            var member = _repository.Get(memberId);

            member.IsBeingOnboarded = isBeingOnboarded;

            _repository.Save();
        }

        public Member GetMember(int memberId)
        {
            return _repository.GetAll().Include(x => x.Organization).Single(x => x.Id == memberId);
        }
    }
}
