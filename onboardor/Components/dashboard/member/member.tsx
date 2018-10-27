import React from "react";
import { Image } from "rebass";
import { IProcess } from "../onboardingProcess/savedOnboardingProcess";

interface IProps extends IMember {
  member: IMember;
}

export interface IMember {
  id: number;
  memberId: number;
  onboardingProcesses: IProcess[];
  name: string;
  avatarUrl: string;
}

const Member = ({
   name,
   avatarUrl
}: IProps) => (
  <div>
    <Image src={avatarUrl} />
    {name}

    <div>
      Monthly progress
    </div>
  </div>
);

export default Member;
