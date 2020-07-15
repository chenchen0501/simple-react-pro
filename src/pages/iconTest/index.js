// 用于测试icon，不用可删除

import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import SvgIcon from '@/components/svgIcon';

const DemoTest = () => {
  return (
    <PageContainer>
      <Card>
        <SvgIcon type="icon-zhifubao" />
      </Card>
    </PageContainer>
  );
};

export default DemoTest;
