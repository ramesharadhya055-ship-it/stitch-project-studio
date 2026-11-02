import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Stitch - Projects" }] }),
  staticData: { importedDocument: { html: { "dir": "ltr", "lang": "en-US" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="block" {...({ "ng-version": "0.0.0-PLACEHOLDER", "_nghost-ng-c2905412951": "" } as any)}>
        <div className="block" {...({ "_nghost-ng-c1889210297": "" } as any)}>
          <div className="bg-none [background-position:0%_0%] [background-size:auto_auto] [background-repeat:repeat] [background-origin:padding-box] [background-clip:border-box] [background-attachment:scroll] bg-site-import-background text-white flex h-svh w-screen" {...({ "_ngcontent-ng-c1889210297": "", "_nghost-ng-c4052388064": "" } as any)}>
            <main className="h-full w-full" {...({ "_ngcontent-ng-c4052388064": "" } as any)}>
              <div className="ac-iframe flex h-svh w-full" {...({ "_ngcontent-ng-c1889210297": "" } as any)}>
                <img className="w-[1536px] [max-width:100%]" style={{ height: "auto" }} id="I0_1793595204319" alt="Stitch - Design with AI" src="/site-assets/46db85b063b5333f.png" data-site-import-static-fallback="video" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
