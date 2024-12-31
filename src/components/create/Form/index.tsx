import { useForm } from 'react-hook-form';
const defaultValues = {
    testNumber: '1',
    title: '',
    preparation: '',
}


  {/* // テスト観点をタイトルを生成するために必要なもの
            // 1: テスト観点のタイトル
            // 2: 事前準備（複数行）
            // 3: テスト手順（複数行）
            // 
            // 実装内容
            // 1: テスト観点のタイトルを入力するフォーム
            // 2: 事前準備を入力するフォーム
            //   - 複数行の入力ができるようにする
            //   - 必要に応じて行を追加できるようにする
            // 3: テスト手順を入力するフォーム
            //   - 複数行の入力ができるようにする
            //   - 必要に応じて行を追加できるようにする
            // 4: テスト観点のタイトル、事前準備、テスト手順のプレビュー
            //  */}
const Form = ():JSX.Element => {
    const {
        register,
        handleSubmit,
        setValue,
        control,
      } = useForm({
        mode: 'onChange', 
        defaultValues,
      });

    const onSubmit = () => {
        console.log('submit')
    }

    return (
        
        <form onSubmit={ onSubmit }>
            <div className="form__contents">
                <div className="form__content">
                    <label htmlFor="testNumber">観点番号</label>
                    <input type="text" id="testNumber" {...register("testNumber")} />
                </div>
                <div className="form__content">
                    <label htmlFor="title">テスト観点のタイトル</label>
                    <input type="text" id="title" {...register("title")} />
                </div>
                <div className="form__content">
                    <label htmlFor="preparation">事前準備</label>
                    <input type="text" id="preparation" {...register("preparation")} />
                </div>
                <div className="form__content">
                    <input type="submit" value="作成" />
                </div>
            </div>
        </form>
    );
}
export default Form;