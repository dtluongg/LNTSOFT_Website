import React from 'react'
import {
  ClipboardList,
  FileText,
  Layers,
  Users2,
} from 'lucide-react'
import IndustryHeroTemplate from '../common/IndustryHeroTemplate'

export interface WorkNoteIntroduceProps {
  bgImage?: string
}

export default function WorkNoteIntroduce({
  bgImage = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80',
}: WorkNoteIntroduceProps) {
  // 4 Tính năng cốt lõi được cô đọng trực tiếp từ Key Features của FXPRO WorkNote
  const workNoteFeatures = [
    {
      titleTop: 'Tasks & Notes',
      titleBottom: 'Tracking',
      desc: 'Record, organize, and track tasks and comments directly against relevant Sales Orders.',
      icon: ClipboardList,
    },
    {
      titleTop: 'Document',
      titleBottom: 'Management',
      desc: 'Maintain related documents and supporting files in one centralized location for easy reference.',
      icon: FileText,
    },
    {
      titleTop: 'Structured',
      titleBottom: 'Categories',
      desc: 'Classify notes and tasks into predefined categories for quick filtering and status control.',
      icon: Layers,
    },
    {
      titleTop: 'Private & Shared',
      titleBottom: 'Collaboration',
      desc: 'Control note privacy and collaborate seamlessly with cross-functional team members.',
      icon: Users2,
    },
  ]

  return (
    <IndustryHeroTemplate
      brandCategory="Apparel WorkNote"
      titleLine1="FXPRO"
      titleLine2="WorkNote"
      titleLine2Color="#087bc1"
      tagline="Digital Note & Task Management for Sales Order Execution"
      description="FXPRO WorkNote is a centralized digital note and task management platform for Sales Orders. It empowers teams to record, organize, assign, and track critical order activities, comments, and supporting documents with structured categorization, status tracking, and reminders for timely execution."
      features={workNoteFeatures}
      primaryCtaText="Explore Capabilities"
      primaryCtaLink="#capabilities"
      secondaryCtaText="Request a Demo"
      secondaryCtaLink="#contact"
      bgImage={bgImage}
      bgImageAlt="FXPRO WorkNote Digital Note and Task Management Solution"
    />
  )
}
