import React from 'react';
import '../App.css';
import { Input, Button, Radio, Checkbox, Row, Col } from 'antd';

const { TextArea } = Input;

class Questionnaire extends React.Component {
    constructor() {
        super();
        this.dvRef = React.createRef();
    }
    state = {
        singles: [
            {label: 's1', question: '您的性别', options: ['男', '女']},
            {label: 's2', question: '您的年龄段', options: ['18岁以下', '18~25', '26~30', '31~40', '41~50', '51~60', '60以上']},
            {label: 's3', question: '搞基的出道曲是', options: ['三女孩', 'A', '三蹦子', '衣服有毒']},
            {label: 's4', question: '搞基的是谁家的', options: ['JYP', '鸟宝']},
            {label: 's5', question: '一直在天上飞的成员是谁', options: ['mark', 'jackson', 'bambam', '忙内']},
            {label: 's6', question: 'GOT7应援色是', options: ['红', '绿', '黄', '紫']},
            {label: 's7', question: '谁最爱弹鸟心', options: ['读书人', '里兜', '森尼', '文王']},
            {label: 's8', question: '喜欢搞基多久了', options: ['不到一年', '1-3年', '3年以上']},
            {label: 's9', question: '会继续爱搞基多久', options: ['forever']},
        ],
        multiples: [
            {label: 'm1', question: '你最爱的cp是', options: ['宜嘉', '谦斑', '伉俪', '范七', '宜珍', '范二', '夕阳红', '笔斑', '笔谦', 'coco爸爸们', 'markbam', '马克菠萝', '狗狗line', '嘉七', 'jackbam', '有尔', '镇浦', '荣斑', '菠萝猪', '七斑', '谦七']},
            {label: 'm2', question: 'GOT7你最喜欢他们的方面', options: ['颜值', '才华', '人品', '团魂']},
        ],
        answers: [],
        message: null
    };

    onChange = e => {
        // 将选中的题目添加到数组中，不存在则添加，已存在的不做处理
        if(this.state.answers.length === 0) {
            this.state.answers.push(e.target.name)
        } else if (this.state.answers.indexOf(e.target.name) === -1) {
            this.state.answers.push(e.target.name)
        }
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
        // console.log(e.target)
    }
    changeEvent(e){
        // 文本框内容
        this.setState({
            ...this.state,
            message: e.target.value
        })
    }

    checkedValues(checkedValues) {
        // console.log('checked = ', checkedValues);
    }

    submit() {
        // 文本框内容不为空且每道题全部选中才能提交成功
        if (this.state.answers.length === this.state.singles.length && this.state.message) {
            console.log(333);
            alert('提交成功！感谢您的配合！')
        } else {
            alert('请全部填写完毕');
        }
    }
    
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        const radios = this.state.singles.map((single, index) => {
            let options = single.options.map((option, optionIndex) => {
                return (
                    <Radio style={radioStyle} value={optionIndex+1} key={optionIndex}>
                        {option}
                    </Radio>
                )
            })
            return (
                <div key={index} className='QandA'>
                    <p style={{fontWeight: '600', marginLeft: '-10px'}}>{index+1}. {single.question}</p>
                    <Radio.Group onChange={this.onChange} value={this.state[single.label]} name={single.label}>
                        {options}
                    </Radio.Group>
                    <br />
                    <br />
                </div>
            );
        });

        const checkboxs = this.state.multiples.map((multiple, index) => {
            let options = multiple.options.map((option, optionIndex) => {
                return (
                    <Col span={24} key={optionIndex}>
                        <Checkbox value={optionIndex+1}>{option}</Checkbox>
                    </Col>
                );
            });
            return (
                <div key={index} className='QandA'>
                    <p style={{fontWeight: '600', marginLeft: '-10px'}}>{this.state.singles.length + index+1}. {multiple.question}</p>
                    <Checkbox.Group style={{ width: '100%', marginLeft: '10px' }} onChange={this.checkedValues} name={multiple.label}>
                        <Row>
                            {options}
                        </Row>
                    </Checkbox.Group>
                    <br />
                    <br />
                </div>
            )
        })

        // console.log(this.state, this.state.singles.length)
        return (
            <div className='Questionnaire'>
                <h2>你对GOT7了解多少</h2>
                {radios}

                {checkboxs}

                <p style={{fontWeight: '600'}}>{this.state.singles.length + this.state.multiples.length + 1}. 你觉得哪句话最能代表你想说的话或是哪句话是搞基的名言eg：7 or nothing</p>
                <TextArea rows={2} onChange={(e)=>this.changeEvent(e)} />
                <br />
                <br />
                <br />
                <p style={{width: '100%', textAlign: 'center'}}>
                    <Button type="primary" block onClick={() => {this.submit()}}>
                        提 交
                    </Button>
                </p>
            </div>
        )
    }
}

export default Questionnaire;