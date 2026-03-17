import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const reservationsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    menu: menuRef,
    reservations: reservationsRef,
    contact: contactRef,
  };
  
  const isMenuPage = location.pathname === '/menu';

  // Attach refs to children if they are the Home page components
  const childrenWithRefs = React.Children.map(children, child => {
    if (child.type.name === 'AnimatePresence' && child.props.children.props.element?.type?.name === 'Home') {
      const homeElement = child.props.children.props.element;
      
      const homeChildrenWithRefs = React.Children.map(homeElement.props.children, (homeChild) => {
        if (!homeChild) return null;

        const refMap = {
          AboutSection: aboutRef,
          MenuPreview: menuRef,
          ReservationSection: reservationsRef,
          Footer: contactRef
        };
        const refToAttach = refMap[homeChild.type.name];
        if (refToAttach) {
          return React.cloneElement(homeChild, { ref: refToAttach });
        }
        return homeChild;
      });

      const clonedHomeElement = React.cloneElement(homeElement, {}, ...homeChildrenWithRefs);
      const clonedRoutes = React.cloneElement(child.props.children, {element: clonedHomeElement});
      const clonedAnimatePresence = React.cloneElement(child, {}, clonedRoutes);
      return clonedAnimatePresence;
    }
    // For MenuPage, we don't need to pass refs down to its children, but we need to pass a footer ref.
    if(isMenuPage) {
        return React.cloneElement(child, {
            children: React.Children.map(child.props.children, (pageChild) => {
                 if(pageChild.type.name === 'AnimatePresence') {
                    const routes = pageChild.props.children;
                    const menuPageElement = routes.props.element;
                    const menuPageChildrenWithRefs = React.Children.map(menuPageElement.props.children, (menuChild) => {
                         if (!menuChild) return null;
                         if (menuChild.type.name === 'Footer') {
                            return React.cloneElement(menuChild, { ref: contactRef });
                         }
                         return menuChild;
                    });

                    const clonedMenuPage = React.cloneElement(menuPageElement, {}, ...menuPageChildrenWithRefs);
                    const clonedRoutes = React.cloneElement(routes, {element: clonedMenuPage});
                    return React.cloneElement(pageChild, {}, clonedRoutes);
                 }
                 return pageChild;
            })
        })
    }


    return child;
  });

  return (
    <>
      <Header sectionRefs={sectionRefs} isMenuPage={isMenuPage} />
      {children}
       {!isMenuPage && <Footer ref={contactRef} />}
    </>
  );
};

export default Layout;