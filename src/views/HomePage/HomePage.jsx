import React from 'react';
import { getIsLoading } from '../../redux/auth';

export default function HomePage() {
  return <>{getIsLoading && <div>HOME PAGE</div>}</>;
}
