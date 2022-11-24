import { Container } from '@/components/Container'

export default function PdfReader(props) {
    return (
        <div className="h-full mx-auto 2xl">
            <div className="mt-8 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <object
                    data={props.url}
                    type="application/pdf"
                    width={props.width}
                    height={props.height}
                >
                    <iframe
                        src={props.url}
                        width={props.width}
                        height={props.height}
                    >
                    </iframe>
                </object>
            </div>
        </div>
    )
}
