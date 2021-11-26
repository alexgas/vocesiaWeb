import * as React from 'react';
import { useTranslation } from 'next-i18next'
import Image from "next/image";
const Index = ({ className = ''}) => {
    const { t } = useTranslation('footer')
    return (
<div>Hi</div>
    );
}

export default Index;
