import React from "react";

import Spinner from "../elements/Spinner";
import _ from "lodash";

const InfinityScroll = (props) => {
  const { children, callNext, is_next, loading } = props;

  // 쓰로틀 적용
  const _handleScroll = _.throttle(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    // 스크롤 계산!
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) || //document.documenElement 가있으면 ...scrollTop을 가져와라 아니면 ..body.scrollTop을 가져와라
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 200) {   //계산해서 내려갈때 200px 보다 작아지면 다시불러오게하기
      // 로딩 중이면 다음 걸 부르면 안되겠죠!
      if (loading) {
        return;
      }

      callNext();
    }
  }, 300);

  const handleScroll = React.useCallback(_handleScroll, [loading]);

  React.useEffect(() => {
    // 로딩 중이면, return!
    if (loading) {
      return;
    }

    // 다음 게 있으면 이벤트를 붙이고, 없으면 이벤트를 삭제해요!
    if (is_next) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // 이 부분은 컴포넌트가 사라질 때 호출되는 부분입니다! (클린업이라고도 해요.)
    return () => window.removeEventListener("scroll", handleScroll);
  }, [is_next, loading]);

  return (
    <React.Fragment>
      {children}
      {is_next && <Spinner />}
    </React.Fragment>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
};

export default InfinityScroll;