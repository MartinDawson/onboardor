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

        public void Remove(Member member)
        {
            _repository.Remove(member);
        }

        public void Add(Member member)
        {
            _repository.Add(member);
        }

        public void Update(Member member)
        {
            _repository.Update(member);
        }

        public Member GetMember(int memberId)
        {
            return _repository.GetAll()
                .Include(x => x.Organizations)
                .Include(x => x.OnboardingProcess)
                .SingleOrDefault(x => x.Id == memberId);
        }
    }
}
