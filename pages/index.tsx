/* eslint-disable @next/next/no-page-custom-font */
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Avatar, Box, Container, Link, Popover } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import { topicList as tabs } from '../data/topics';

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [anchorEl, setAnchorEl] = useState(null);
  const codingReasons: string[] = useMemo(
    () => ['a living', 'fun', 'profit'],
    []
  );

  const [codingReason, setCodingReason] = useState(codingReasons[0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCodingReason((prevReason) => {
        const index = codingReasons.indexOf(prevReason) + 1;
        if (index === codingReasons.length) return codingReasons[0];
        else return codingReasons[index];
      });
    }, 2000);
    return () => {
      window.clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Head>
        <title>Get to know Sadia</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Lato&family=Rowdies:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container className='content' maxWidth={false}>
        <h1 className={'heading'}>Sadia Afrin</h1>
        <h2>
          <span>I code for </span>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              key={codingReason ? codingReason : 'empty'}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0, color: '#edbe14' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {codingReason}.
            </motion.span>
          </AnimatePresence>
        </h2>
        <div className='tabs-wrapper'>
          <ul className='tab-list'>
            {tabs.map((item) => (
              <li
                className={`tab ${item === selectedTab ? 'tab--selected' : ''}`}
                key={item.label}
                onClick={() => setSelectedTab(item)}
              >
                <span className='tab__label'>
                  {`${item.icon} ${item.label}`}
                </span>
              </li>
            ))}
          </ul>
          <div className='tab-item-description'>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={selectedTab ? selectedTab.label : 'empty'}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.15 }}
              >
                {selectedTab ? (
                  <div>
                    {selectedTab.description.text}
                    <Box
                      className='tab-item-description__supporting'
                      display='flex'
                    >
                      {selectedTab.description?.imageUrl && (
                        <Avatar
                          sx={{
                            width: 24,
                            height: 24,
                            cursor: 'pointer',
                            mr: 2,
                          }}
                          src={selectedTab.description?.imageUrl}
                          onClick={handleClick}
                        />
                      )}
                      <Link
                        href={selectedTab.description.link?.url}
                        underline='hover'
                        target='_blank'
                      >
                        {selectedTab.description.link?.label}
                      </Link>

                      <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                      >
                        <Box
                          component='img'
                          src={selectedTab.description?.imageUrl}
                          sx={{
                            maxHeight: '100vh',
                            maxWidth: '80vh',
                          }}
                        />
                      </Popover>
                    </Box>
                  </div>
                ) : (
                  '😋'
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <Box display={'flex'} sx={{ mt: 2, columnGap: '8px' }}>
          <a
            href='https://www.linkedin.com/in/sadiaafrinfarhin/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            href='https://github.com/farhin00farhin'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
          <a href='mailto:farhin00farhin@gmail.com'>
            <EmailIcon />
          </a>
        </Box>
      </Container>
    </>
  );
};

export default Home;
