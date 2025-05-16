'use client'

import React, { useMemo, useState } from 'react'
import ViewButton from './view-button'
import { Blend, Grid2x2, List } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { AnimatePresence, motion } from 'motion/react'

const buttons = [
  {
    id: 'list',
    icon: <List />,
    label: 'List view',
  },
  {
    id: 'card',
    icon: <Grid2x2 />,
    label: 'Card view',
  },
  {
    id: 'pack',
    icon: <Blend />,
    label: 'Pack view',
  },
]

const Collectibles = () => {
  const [view, setView] = useState<'list' | 'card' | 'pack'>('list')

  const content = useMemo(() => {
    switch (view) {
      case 'list':
        return <ListView key="list" />
      case 'card':
        return <CardView key="card" />
      case 'pack':
        return <PackView key="pack" />
    }
  }, [view])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-8">
      <div className="mt-32 flex flex-col gap-6">
        <div className="flex gap-4">
          {buttons.map(button => (
            <ViewButton
              onClick={() => {
                setView(button.id as 'list' | 'card' | 'pack')
              }}
              variant={view === button.id ? 'selected' : 'default'}
              key={button.id}
              icon={button.icon}
              label={button.label}
            />
          ))}
        </div>
        <Separator />
      </div>
      <div className="grow-1 px-2 md:w-[25%] md:px-0">
        <AnimatePresence mode="wait">{content}</AnimatePresence>
      </div>
    </div>
  )
}

export default Collectibles

function ListView() {
  return (
    <motion.div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            layoutId="fingers-image-container"
            className="relative h-auto w-auto"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <motion.img
              src="/fingers.svg"
              alt="fingers"
              width={75}
              height={75}
              className="object-contain"
            />
          </motion.div>
          <div>
            <motion.div
              layoutId="fingers-heading-container"
              className="overflow-hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.h4 className="scroll-m-20 text-xl tracking-tight">
                Skilled Fingers Series
              </motion.h4>
            </motion.div>
            <motion.div
              layoutId="fingers-price-container"
              className="overflow-hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div>
                <span>0.855</span>{' '}
                <span className="text-muted-foreground">ETH</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            layoutId="fingers-gold-container"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Gold />
          </motion.div>
          <motion.div
            layoutId="fingers-code-container"
            className="overflow-hidden"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <span className="text-muted-foreground">#209</span>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.div
            layoutId="radio-image-container"
            className="relative h-auto w-auto"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <motion.img
              src="/vibe-radio.svg"
              alt="radio"
              width={75}
              height={75}
              className="object-contain"
            />
          </motion.div>
          <div>
            <motion.div
              layoutId="radio-heading-container"
              className="overflow-hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.h4 className="scroll-m-20 text-xl tracking-tight">
                Vibrant Vibes Series
              </motion.h4>
            </motion.div>
            <motion.div
              layoutId="radio-price-container"
              className="overflow-hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div>
                <span>0.209</span>{' '}
                <span className="text-muted-foreground">ETH</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            layoutId="radio-gold-container"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Gold />
          </motion.div>
          <motion.div
            layoutId="radio-code-container"
            className="overflow-hidden"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <span className="text-muted-foreground">#808</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function CardView() {
  return (
    <motion.div className="flex justify-between">
      <div className="flex w-[47%] flex-col gap-2">
        <motion.div
          layoutId="fingers-image-container"
          className="relative h-auto w-auto"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.img
            src="/fingers.svg"
            alt="fingers"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          layoutId="fingers-heading-container"
          className="overflow-hidden"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.h4 className="scroll-m-20 text-xl tracking-tight">
            Skilled Fingers Series
          </motion.h4>
        </motion.div>
        <div className="flex justify-between">
          <motion.div
            layoutId="fingers-price-container"
            className="overflow-hidden"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div>
              <span>0.855</span>{' '}
              <span className="text-muted-foreground">ETH</span>
            </div>
          </motion.div>
          <div className="flex gap-2">
            <motion.div
              layoutId="fingers-gold-container"
              className="self-center"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Gold />
            </motion.div>
            <motion.div
              layoutId="fingers-code-container"
              className="self-center overflow-hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <span className="text-muted-foreground">#209</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex w-[47%] flex-col gap-2">
        <motion.div
          layoutId="radio-image-container"
          className="relative h-auto w-auto"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.img
            src="/vibe-radio.svg"
            alt="radio"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          layoutId="radio-heading-container"
          className="overflow-hidden"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.h4 className="scroll-m-20 text-xl tracking-tight">
            Vibrant Vibes Series
          </motion.h4>
        </motion.div>
        <div className="flex justify-between">
          <motion.div
            layoutId="radio-price-container"
            className="overflow-hidden"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div>
              <span>0.209</span>{' '}
              <span className="text-muted-foreground">ETH</span>
            </div>
          </motion.div>
          <div className="flex gap-2">
            <motion.div
              layoutId="radio-gold-container"
              className="self-center"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Gold />
            </motion.div>
            <motion.div
              layoutId="radio-code-container"
              className="self-center overflow-hidden"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <span className="text-muted-foreground">#808</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PackView() {
  return (
    <motion.div className="relative flex flex-col items-center justify-center gap-8">
      <div className="relative">
        <motion.div
          layoutId="fingers-image-container"
          className="relative"
          style={{ zIndex: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.img
            src="/fingers.svg"
            alt="fingers"
            width={140}
            height={140}
            className="object-contain"
            style={{ rotate: '-10deg' }}
          />
        </motion.div>
        <motion.div
          layoutId="radio-image-container"
          className="absolute top-0"
          style={{ zIndex: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.img
            src="/vibe-radio.svg"
            alt="radio"
            width={140}
            height={140}
            className="object-contain"
            style={{ rotate: '10deg' }}
          />
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <motion.h3 className="scroll-m-20 text-2xl tracking-tight">
          2 Collectibles
        </motion.h3>
        <div>
          <motion.span className="scroll-m-20 text-2xl tracking-tight">
            1.064{' '}
          </motion.span>
          <motion.span className="text-muted-foreground scroll-m-20 text-xl tracking-tight">
            ETH
          </motion.span>
        </div>
      </div>
    </motion.div>
  )
}

function Gold() {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_14_2337)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.751 4.72464L8.44634 1.41797C7.18501 0.155303 5.45101 0.192637 4.12965 1.51197L1.01498 4.62597C-0.302354 5.94927 -0.34102 7.68394 0.920313 8.9426L4.22498 12.2493C4.84098 12.8639 5.56901 13.1706 6.30567 13.1706C7.08034 13.1706 7.86567 12.8313 8.54167 12.1559L11.6557 9.0366C12.3097 8.38394 12.669 7.5886 12.669 6.7966C12.669 6.04127 12.351 5.32394 11.751 4.72464Z"
          fill="#FEBE02"
          fillOpacity="0.15"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i_14_2337"
          x="0"
          y="0.496094"
          width="12.6689"
          height="12.6746"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.996078 0 0 0 0 0.745098 0 0 0 0 0.00784314 0 0 0 0.5 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_14_2337"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
