import React, { useEffect , useState , useCallback} from 'react';

const CRM = () => {
    const [{ offsetTop, offsetBottom }, setScroll] = useState(0);
    const [nodeRef, setRefState] = useState({});

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offsetTop = window.scrollY;
            const offsetBottom = offsetTop + window.innerHeight;
            setScroll({ offsetTop, offsetBottom});
        });
    }, []);

    const setRef = useCallback(node => {
        if (node !== null) {
            setRefState(prevRefState => ({
                ...prevRefState,
                [node.dataset.refkey]: node
            }))
        }
    }, []);

    const InView = (index) => {
        if (nodeRef[index] !== undefined)
        {
            const contentTop = nodeRef[index].offsetTop + nodeRef[index].parentNode.offsetTop;
            const contentBottom = contentTop + nodeRef[index].clientHeight;

            if (offsetTop <= contentBottom && offsetBottom >= contentTop) {
                return "visible";
            }
        }
        return "";
    };

    const Item = (itemImage , position , h2_text , p_text , refkey) => {
        return (
            <div className={`crm__item`}>
                <div className={`crm__item-image ${position}`}>
                    <div
                        className={"crm__item-image-col " + InView(refkey)}
                        ref={setRef} data-refkey={refkey}
                    >
                        <img src={require("../images/" + itemImage)} alt="item_image" />
                    </div>
                </div>
                <div className={`crm__item__context`}>
                    <div className={`crm__item__context-col`}>
                        <h2 className={`crm__item__context-col-h`}>{h2_text}</h2>
                        <p className={`crm__item__context-col-text`}>{p_text}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container crm-container">
            <div className="crm">
                <div className="crm-col">
                    <h1 className="crm-col-h">Meet your simple, intuitive CRM.</h1>
                </div>
                {Item(
                    "IMG_03_value_organize.png",
                    "float-left",
                    "All your customer data in one place.",
                    "Your whole team will be in the loop about every touchpoint for any prospect, customer, interaction, and deal.",
                    "nodeRef_1"
                )}
                {Item(
                    "IMG_04_value_opportunity@2x_v2.png",
                    "float-right",
                    "Never drop an opportunity again.",
                    "With custom pipelines and dashboards, you’ll always know the numbers you have to hit and how to get there.",
                    "nodeRef_2"
                )}
                {Item(
                    "IMG_05_value_takes-thousands.png",
                    "float-left",
                    "Takes thousands of tasks off your plate.",
                    "Say goodbye to manually adding contact details and other little tasks that waste huge amounts of time.",
                    "nodeRef_3"
                )}
            </div>
        </div>
    );
};

export default CRM;