
const Footer = () => {
    return (
        <>
            <footer className="bg-primary-100 py-16 bottomFooter w-full	m-0 p-0 shadow">
                <div className="w-5/6	flex  flex-nowrap justify-center	 py-12	px-0 mx-auto	my-0">
                    <div className="text-left leading-4	pr-4">
                        <p>Build by Witch Talk </p>
                        <p>
               <span id="busuanzi_container_site_uv" className="busuanzi_container_site_uv inline">
            TotalView&nbsp;
                   <span id="busuanzi_value_site_pv" className="busuanzi_value_site_pv"></span>
          </span>
                        </p>
                        <p className="flex">
                            <img src="https://i.imgur.com/k3YTzQE.png" width="100"/>
                            <img src="https://i.imgur.com/zHnVmA2.png" width="100"/>
                            <img src="https://i.imgur.com/PrwitJD.png" width="100"/>
                        </p>
                        <p>
                            <span id="runtime_span"></span>
                        </p>
                        <p className="copyright">Copyright © 2023 Witch Talk. All Rights Reserved.</p>
                    </div>
                    <div>
                        <aside>
                            <div>
                                <p>所有非Witch Talk创作的文章和讨论的版权归原作者所有。</p>
                                <p>Copyrights for all articles and discussions not created by Witch Talk remain with
                                    their original
                                    authors.</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </footer>
        </>

    );

};

export default Footer;