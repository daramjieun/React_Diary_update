import Header from '../Components/Header';
import Button from '../Components/Button';
import Editor from '../Components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    usePageTitle('새 일기 쓰기');

    const onSubmit = (input) => {
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        );
        nav('/', { replace: true });
    };

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button
                    // 인수로 -1을 넣어주면 페이지가 뒤로 간다. 
                    onClick={() => nav(-1)}
                    text={"< 뒤로 가기"} />}
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
}

export default New;