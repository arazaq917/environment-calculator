import Image from 'next/image'
import resource from '../../public/assets/resource.png'


export default function PaperBenefits() {
    return (
        <div className="flex flex-col items-center justify-center mt-[100px]">
            <div className="text-white text-5xl mb-10 font-bold">Did You Know?</div>
            <div className="text-white text-3xl mb-10">Paper Certificates is A Silent Threat to Our Planet's Health.</div>

            <div className="grid grid-cols-3 gap-4 mt-[20px] items-center">
                <div className="flex flex-col items-end gap-[178px]">
                    <div className="w-[350px] text-center lg:mr-[-60px] flex flex-col items-center bg-[#FFFFFFCC] p-6 rounded-lg">
                        <div className="mb-4 text-xl font-bold">Deforestation</div>
                        <p>The production of paper certificates is the <strong>main</strong> contribution of deforestation.</p>
                    </div>
                    <div className="lg:mr-[-15px] text-center w-[350px] flex flex-col items-center bg-[#FFFFFFCC] p-6 rounded-lg">
                        <div className="text-xl font-bold mb-4">Resource Depletion</div>
                        <p>Paper certificates require the use of valuable natural resources.</p>
                    </div>
                </div>

                <div className="z-10 h-[450px] w-[450px] bg-[#FFFFFF] rounded-full flex items-center justify-center">
                    <Image
                        src={resource}
                        alt="Picture"
                    />
                </div>

                <div className="w-[350px] flex flex-col text-center items-center bg-[#FFFFFFCC] p-6 rounded-lg">
                    <div className="mb-4 text-xl font-bold">Forgery and Fraud</div>
                    <p>Paper certificates are susceptible to <strong>forgery</strong> and <strong>fraud</strong>.</p>
                </div>
            </div>
            <span className="font-bold text-[35px] mt-[10px] text-white">Paper Certificates</span>
            <div className="mt-[200px]">
                <span className="font-bold text-[35px] text-white">Join Our Movement To Save Planet Earth !</span>
            </div>
        </div>
    );
}
