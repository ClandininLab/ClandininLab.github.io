/* =====================================================================
   PUBLICATIONS  —  shown on the Publications page, top to bottom.

   To ADD a paper: copy one { ... } block (including the comma after it),
   paste it at the TOP of the list (newest first), and fill in:
     citation ..... the full reference, as plain text
     link ......... where clicking the entry should go (DOI link is best,
                    e.g. "https://doi.org/10.1016/j.cell.2025.05.007")
     categories ... one or more of the category names below, exactly as spelled

   When a preprint is published, update its block rather than adding a new one.
   ===================================================================== */

/* Filter categories and their colors (shown as the colored pills). */
window.LAB_PUB_CATEGORIES = {
  "Visual Computation": "#6f7d3a",
  "Behavior": "#bd8d2c",
  "Brain-wide & Connectomics": "#3b6ea5",
  "Tools & Methods": "#2f5d59",
  "Neurodegeneration & Metabolism": "#b23a2e",
  "Development & Wiring": "#7a4a6b",
  "Review & Perspective": "#6b6b60"
};

window.LAB_PUBLICATIONS = [
  {
    citation: "Currier, T.A., Tadres, D., Troper, J.E., Wang, Y., and Clandinin, T.R. (2026). Unilateral gene expression via maternally controlled zygotic recombination in Drosophila. bioRxiv 2026.10.14.759140 [Preprint].",
    link: "https://www.biorxiv.org/content/10.64898/2026.10.14.759140v1",
    categories: ["Tools & Methods","Development & Wiring"]
  },
  {
    citation: "Zucker-Scharff, I., Brezovec, B.E., Hao, Y.A., Wang, Y., Choi, M., Su, S.J., et al. (2026). Unique neural activity states predict action selection in response to visual threat. Curr. Biol. 36, 4606-4618.e3.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(26)01008-0",
    categories: ["Behavior","Brain-wide & Connectomics"]
  },
  {
    citation: "Theisen, E.K., Rivas-Serna, I.M., Cheng, P., Lee, R.J., Thomas, C.I., Darehshouri, A., Jay, T.R., Kunduri, G., Nguyen, T.T., Mazurak, V., Clandinin, M.T., Clandinin, T.R., and Vaughen, J.P. (2026). Lysosomal salvage of neuronal lipids enables glial infiltration of synaptic regions. Neuron 114, 2199-2220.e6.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(26)00089-9",
    categories: ["Neurodegeneration & Metabolism","Development & Wiring"]
  },
  {
    citation: "Hao, Y.A., Jayne, L.L., Lee, S., Dittrich, M.N., Zhang, M., Haziza, S., Bendifallah, I., Sims, R.R., Bouazza-Arostegui, B., White, A.D., Kochalka, J., Wang, Y., Seyedolmohadesin, M., Negrean, A., Li, Z., Chiu, C., Podgorski, K., Ding, J.B., Deisseroth, K., Yuste, R., Emiliani, V., Schnitzer, M.J., Lin, M.Z., and Clandinin, T.R. (2026). Ultrasensitive voltage imaging reveals distinct electrical microdomains in neurons. bioRxiv 2026.05.27.728040 [Preprint].",
    link: "https://www.biorxiv.org/content/10.64898/2026.05.27.728040v1",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Kochalka, J., Mitra, A., White, A.D., Wang, Y., Sheng, K., Hao, Y.A., Kadur, C., Ramakrishnan, C., Hernandez, M., Wenderski, W., Pyo, K.E., Andini, N., Clandinin, T.R., Lin, M.Z., Druckmann, S., and Deisseroth, K. (2026). Causal and directional elements of global brain dynamics. bioRxiv 2026.05.27.726039 [Preprint].",
    link: "https://www.biorxiv.org/content/10.64898/2026.05.27.726039v2",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "White, A.D., Wang, Y., Kochalka, J., Hao, Y.A., Li, C., Hernandez, M., Andini, N., Pyo, K.E., Wenderski, W., Mitra, A., Eshaghi Gharagoz, B., Kadur, C., Ganguli, S., Clandinin, T.R., Lin, M.Z., and Deisseroth, K. (2026). Intrinsic space-time couplings governing multi-scale cortical dynamics. bioRxiv 2026.05.27.726038 [Preprint].",
    link: "https://www.biorxiv.org/content/10.64898/2026.05.27.726038v1",
    categories: ["Brain-wide & Connectomics","Tools & Methods"]
  },
  {
    citation: "Henning, M., Ketkar, M.D., Lüffe, T., Gohl, D.M., Clandinin, T.R., and Silies, M. (2026). Inhibitory columnar feedback neurons are involved in motion processing in Drosophila. eLife 14, RP108529.",
    link: "https://elifesciences.org/articles/108529",
    categories: ["Visual Computation"]
  },
  {
    citation: "Pang, M. M., Chen, F., Xie, M., Druckmann, S., Clandinin, T. R., & Yang, H. H. (2025). A recurrent neural circuit in Drosophila temporally sharpens visual inputs. Current Biology, 35(2), 333-346.e6.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(24)01631-2",
    categories: ["Visual Computation"]
  },
  {
    citation: "Currier, T.A., and Clandinin, T.R. (2025). Infrequent strong connections constrain connectomic predictions of neuronal function. Cell 188, 4366-4381.e14.",
    link: "https://doi.org/10.1016/j.cell.2025.05.007",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "Hao, Y.A., Lee, S., Roth, R.H., Natale, S., Gomez, L., Taxidis, J., O'Neill, P.S., Villette, V., Bradley, J., Wang, Z., et al. (2024). A fast and responsive voltage indicator with enhanced sensitivity for unitary synaptic events. Neuron 112, 3680-3696.e8.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(24)00643-3",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Brezovec, B.E., Berger, A.B., Hao, Y.A., Lin, A., Ahmed, O.M., Pacheco, D.A., Thiberge, S.Y., Murthy, M., and Clandinin, T.R. (2024). BIFROST: A method for registering diverse imaging datasets of the Drosophila brain. Proc. Natl. Acad. Sci. USA 121, e2322687121.",
    link: "https://www.pnas.org/doi/abs/10.1073/pnas.2322687121",
    categories: ["Tools & Methods","Brain-wide & Connectomics"]
  },
  {
    citation: "Fryer, E., Guha, S., Rogel-Hernandez, L.E., Logan-Garbisch, T., Farah, H., Rezaei, E., Mollhoff, I.N., Nekimken, A.L., Xu, A., Seyahi, L.S., Fechner, S., Druckmann, S., Clandinin, T.R., Rhee, S.Y., and Goodman, M.B. (2024). A high-throughput behavioral screening platform for measuring chemotaxis by C. elegans. PLoS Biology 22(6): e3002672.",
    link: "https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3002672",
    categories: ["Behavior","Tools & Methods"]
  },
  {
    citation: "Lee, S., Zhang, G., Gomez, L.C., Testa-Silva, G., Hao, Y.A., Hiramoto, A., Jiang, D., Roth, R.H., Ding, J., Clandinin, T.R., Roska, B., Feldman, D., Ji, N., and Lin, M.Z. (2024). Improving positively tuned voltage indicators for faster kinetics and higher contrast. bioRxiv 2024.06.21.599617 [Preprint].",
    link: "https://www.biorxiv.org/content/10.1101/2024.06.21.599617v2.full",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Pang, M.M., Chen, F., Xie, M., Druckmann, S., Clandinin, T.R., and Yang, H.H. (2024). A recurrent neural circuit in Drosophila deblurs visual inputs. bioRxiv 2024.04.19.590352 [Preprint].",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11071408/",
    categories: ["Visual Computation"]
  },
  {
    citation: "Fryer, E., Guha, S., Rogel-Hernandez, L.E., Logan-Garbisch, T., Farah, H., Rezaei, E., Mollhoff, I.N., Nekimken, A.L., Xu, A., Seyahi, L.S., Fechner, S., Druckmann, S., Clandinin, T.R., Rhee, S.Y., and Goodman, M.B. (2024). An efficient behavioral screening platform classifies natural products and other chemical cues according to their chemosensory valence in C. elegans. bioRxiv 2023.06.02.542933 [Preprint].",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10274637/",
    categories: ["Behavior","Tools & Methods"]
  },
  {
    citation: "Brezovec, B.E., Berger, A.B., Hao, Y.A., Chen, F., Druckmann, S., and Clandinin, T.R. (2024). Mapping the neural dynamics of locomotion across the Drosophila brain. Curr. Biol. 34, 710-726.e4.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(23)01763-3",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "Mano, O., Choi, M., Tanaka, R., Creamer, M.S., Matos, N.C.B., Shomar, J.W., Badwan, B.A., Clandinin, T.R., and Clark, D.A. (2023). Long-timescale anti-directional rotation in Drosophila optomotor behavior. eLife 12, e86076.",
    link: "https://elifesciences.org/articles/86076",
    categories: ["Behavior","Visual Computation"]
  },
  {
    citation: "Brezovec, L.E., Berger, A.B., Druckmann, S., and Clandinin, T.R. (2023). Neural correlates of future volitional action in Drosophila. bioRxiv.",
    link: "https://www.biorxiv.org/content/10.1101/2023.09.08.556917v1.full",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "Evans, S.W., Shi, D.-Q., Chavarha, M., Plitt, M.H., Taxidis, J., Madruga, B., Fan, J.L., Hwang, F.-J., Van Keulen, S.C., Suomivuori, C.-M., Pang, M.M., Su, S., Lee, S., Hao, Y.A., Zhang, G., Jiang, D., Pradhan, L., Roth, R.H., Liu, Y., Dorian, C.C., Reese, A.L., Negrean, A., Losonczy, A., Makinson, C.D., Wang, S., Clandinin, T.R., Dror, R.O., Ding, J.B., Ji, N., Golshani, P., Giocomo, L.M., Bi, G.-Q., and Lin, M.Z. (2023). A positively tuned voltage indicator for extended electrical recordings in the brain. Nat. Methods 20, 1104-1113.",
    link: "https://www.nature.com/articles/s41592-023-01913-z",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Currier, T.A., Pang, M.M., and Clandinin, T.R. (2023). Visual processing in the fly, from photoreceptors to behavior. Genetics 224, iyad064.",
    link: "https://academic.oup.com/genetics/article/224/2/iyad064/7147603",
    categories: ["Review & Perspective","Visual Computation"]
  },
  {
    citation: "Vaughen, J.P., Theisen, E., and Clandinin, T.R. (2023). From seconds to days: Neural plasticity viewed through a lipid lens. Curr. Opin. Neurobiol. 80, 102702.",
    link: "https://www.sciencedirect.com/science/article/pii/S0959438823000272",
    categories: ["Review & Perspective","Neurodegeneration & Metabolism"]
  },
  {
    citation: "Turner, M.H., Krieger, A., Pang, M.M., and Clandinin, T.R. (2022). Visual and motor signatures of locomotion dynamically shape a population code for feature detection in Drosophila. eLife. 11, e82587.",
    link: "https://elifesciences.org/articles/82587",
    categories: ["Visual Computation"]
  },
  {
    citation: "Vaughen, J.P., Theisen, E., Rivas-Serna, I.M., Reimer, R.J., Clandinin, M.T., and Clandinin, T.R. (2022). Glial control of sphingolipid levels sculpts diurnal remodeling in a circadian circuit. Neuron. 110, 3186-3205.e7.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(22)00661-4",
    categories: ["Neurodegeneration & Metabolism"]
  },
  {
    citation: "Liu, Z., Lu, X., Villette, V., Gou, Y., Colbert, K.L., Lai, S., Guan, S., Land, M.A., Lee, J., Assefa, T., et al. (2022). Sustained deep-tissue voltage recording using a fast indicator evolved for two-photon microscopy. Cell. 185, 3408-3425.e29.",
    link: "https://www.cell.com/cell/fulltext/S0092-8674(22)00916-3?dgcid=raven_jbs_etoc_email",
    categories: ["Tools & Methods"]
  },
  {
    citation: "York, R.A., Brezovec, L.E., Coughlan, J., Matute, D.R., Tuthill, J.C., and Clandinin, T.R. (2022). The evolutionary trajectory of drosophilid walking. Current Biology. 32, 3005-3015.e6.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(22)00836-3",
    categories: ["Behavior"]
  },
  {
    citation: "Li, H., Janssens, J., Waegeneer, M.D., Kolluru, S.S., Davie, K., Gardeux, V., Saelens, W., David, F.P.A., Brbic, M., Spanier, K., Leskovec, J., McLaughlin, C.N., Xie, Q., Jones, R.C., Brueckner, K., Shim, J., Tattikota, S.G., Schnorrer, F., Rust, K., and Zinzen, R.P. (2022). Fly Cell Atlas: A single-nucleus transcriptomic atlas of the adult fruit fly. Science.",
    link: "https://www.science.org/doi/full/10.1126/science.abk2432",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Carreira-Rosario, A., York, R.A., Choi, M., Doe, C.Q., and Clandinin, T.R. (2021). Mechanosensory input during circuit formation shapes Drosophila motor behavior through patterned spontaneous network activity. Current Biology 31, 5341-5349.e4.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(21)01126-X",
    categories: ["Development & Wiring","Behavior"]
  },
  {
    citation: "Turner, M.H., and Clandinin, T.R. (2021). Neuroscience: Convergence of biological and artificial networks. Current Biology 31, R1079-R1081.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(21)01041-1",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Turner, M.H., Mann, K., and Clandinin, T.R. (2021). The connectome predicts resting-state functional connectivity across the Drosophila brain. Current Biology 31, 2386-2394.e3.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(21)00343-2?dgcid=raven_jbs_aip_email",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "Mann, K., Deny, S., Ganguli, S., and Clandinin, T.R. (2021). Coupling of activity, metabolism, and behavior across the Drosophila brain. Nature 593, 244-248.",
    link: "https://www.nature.com/articles/s41586-021-03497-0",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "York, R.A., Carreira-Rosario, A., Giocomo, L.M., and Clandinin, T.R. (2020). Flexible analysis of animal behavior via time-resolved manifold embedding. bioRxiv.",
    link: "https://www.biorxiv.org/content/10.1101/2020.09.30.321406v2.full",
    categories: ["Behavior","Tools & Methods"]
  },
  {
    citation: "Paik, K.C., Wienecke, C.F.R., Yang, H.H., Fisher, Y.E., Wang, I.E., Ishida, I.G., Maimon, G., Wilson, R.I., and Clandinin, T.R. (2020). SPARC enables genetic manipulation of precise proportions of cells. Nat Neurosci. 23(9):1168-1175.",
    link: "https://www.nature.com/articles/s41593-020-0668-9",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Mann, K., Deny, S., Ganguli, S., and Clandinin, T.R. (2020). Causal coupling between neural activity, metabolism, and behavior across the Drosophila brain. bioRxiv.",
    link: "https://www.biorxiv.org/content/10.1101/2020.03.18.997742v1.full",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "Wienecke, C.F.-R., and Clandinin, T.R. (2020). Drosophila vision: An eye for change. Curr Biol. 30(2):R66-R68.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(19)31571-4",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Isaacman-Beck, J., Paik, K.C., Wienecke, C.F.R., Yang, H.H., Fisher, Y.E., Wang, I.E., Ishida, I.G., Maimon, G., Wilson, R.I., and Clandinin, T.R. (2019). SPARC: a method to genetically manipulate precise proportions of cells. bioRxiv.",
    link: "https://www.biorxiv.org/content/10.1101/788679v1.full",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Tsai, J.W., Barnhart, E.L., Zhang, Y., Brown, H., Chen, Y., Bellen, H.J., and Clandinin, T.R. (2019). Transcriptional feedback links lipid synthesis to synaptic vesicle pools in Drosophila photoreceptors. Neuron. 101(4):721-737.e4.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(19)30016-9",
    categories: ["Neurodegeneration & Metabolism"]
  },
  {
    citation: "Barnhart, E.L., Desplan, C., and Clandinin, T.R. (2018). Mitochondria tune neuronal computation in the Drosophila visual system. Mol Biol Cell. 29(26).",
    link: "",
    categories: ["Neurodegeneration & Metabolism","Visual Computation"]
  },
  {
    citation: "Barnhart, E.L., Wang, I.E., Wei, H., Desplan, C., and Clandinin, T.R. (2018). Sequential nonlinear filtering of local motion cues by global motion circuits. Neuron. 100(1):229-243.e3.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(18)30725-6",
    categories: ["Visual Computation"]
  },
  {
    citation: "Yang, H.H., and Clandinin, T.R. (2018). Elementary motion detection in Drosophila: Algorithms and mechanisms. Annu Rev Vis Sci. 4:143-163.",
    link: "https://www.annualreviews.org/content/journals/10.1146/annurev-vision-091517-034153",
    categories: ["Review & Perspective","Visual Computation"]
  },
  {
    citation: "Wienecke, C.F.R., Leong, J.C.S., and Clandinin, T.R. (2018). Linear summation underlies direction selectivity in Drosophila. Neuron. 99(4):680-688.e4.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(18)30545-2",
    categories: ["Visual Computation"]
  },
  {
    citation: "Pang, M.M., and Clandinin, T.R. (2018). Developmental biology: Neurons that divide together wire together. Curr Biol. 28(12):R715-R717.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(18)30609-2",
    categories: ["Review & Perspective","Development & Wiring"]
  },
  {
    citation: "Liddelow, S.A., et al. (2018). Ben Barres (1954-2017). Neuron. 97(6):1211-1213.",
    link: "https://www.cell.com/neuron/fulltext/S0896-6273(18)30182-X",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Wienecke, C.F.R., and Clandinin, T.R. (2017). Drosophila connectomics: Mapping the larval eye's mind. Curr. Biol. 27, R1161-R1163.",
    link: "https://www.cell.com/current-biology/fulltext/S0960-9822(17)31180-6",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Isaacman-Beck, J., and Clandinin, T.R. (2017). Glia put visual map in sync. Science 357, 867-868.",
    link: "https://doi.org/10.1126/science.aao2991",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Mann, K., Gallen, C.L., and Clandinin, T.R. (2017). Whole-Brain Calcium Imaging Reveals an Intrinsic Functional Network in Drosophila. Curr Biol. 27(15):2389-2396.e4.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28756955",
    categories: ["Brain-wide & Connectomics"]
  },
  {
    citation: "Chamberland, S., Yang, H.H., Pan, M.M., Evans, S.W., Guan, S., Chavarha, M., Yang, Y., Salesse, C., Wu, H., Wu, J.C., Clandinin, T.R., Toth, K., Lin, M.Z., and St-Pierre, F. (2017). Fast two-photon imaging of subcellular voltage dynamics in neuronal tissue with genetically encoded indicators. Elife. 6:e25690.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28749338",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Katsov, A.Y., Freifeld, L., Horowitz, M., Kuehn, S., and Clandinin, T.R. (2017). Dynamic structure of locomotor behavior in walking fruit flies. Elife. 6:e26410.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28742018",
    categories: ["Behavior"]
  },
  {
    citation: "Fisher, Y.E., Yang, H.H., Isaacman-Beck, J., Xie, M., Gohl, D.M., and Clandinin, T.R. (2017). FlpStop, a tool for conditional gene control in Drosophila. Elife. 6:e22279.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28211790",
    categories: ["Tools & Methods"]
  },
  {
    citation: "Leong, J.C., Esch, J.J., Poole, B., Ganguli, S., and Clandinin, T.R. (2016). Direction Selectivity in Drosophila Emerges from Preferred-Direction Enhancement and Null-Direction Suppression. J Neurosci. 36(31):8078-92.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/27488629",
    categories: ["Visual Computation"]
  },
  {
    citation: "Yang, H.H., St-Pierre, F., Sun, X., Ding, X., Lin, M.Z., and Clandinin, T.R. (2016). Subcellular Imaging of Voltage and Calcium Signals Reveals Neural Processing In Vivo. Cell. 166(1):245-57.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/27264607",
    categories: ["Visual Computation","Tools & Methods"]
  },
  {
    citation: "Fisher, Y.E., Leong, J.C., Sporar, K., Ketkar, M.D., Gohl, D.M., Clandinin, T.R., and Silies, M. (2015). A Class of Visual Neurons with Wide-Field Properties Is Required for Local Motion Detection. Curr Biol. 25(24):3178-89.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/26670999",
    categories: ["Visual Computation"]
  },
  {
    citation: "Fisher, Y.E., Silies, M., and Clandinin, T.R. (2015). Orientation Selectivity Sharpens Motion Detection in Drosophila. Neuron. 88(2):390-402.",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/26456048",
    categories: ["Visual Computation"]
  },
  {
    citation: "Behnia, R., Clark, D.A., Carter, A., Clandinin, T.R. and Desplan, C. (2014). Processing properties of ON and OFF pathways for Drosophila motion detection. Nature. 512:427-430.",
    link: "http://www.ncbi.nlm.nih.gov/pubmed/25043016",
    categories: ["Visual Computation"]
  },
  {
    citation: "Schwabe, T., Borycz, J.A., Meinertzhagen, I.A. and Clandinin, T.R. (2014). Differential adhesion determines the organization of synaptic fascicles in the Drosophila visual system. Current Biology. 24: 1304-1313.",
    link: "http://www.ncbi.nlm.nih.gov/pubmed/24881879",
    categories: ["Development & Wiring"]
  },
  {
    citation: "Clark, D.A., Fitzgerald, J.E., Ales, J.M., Gohl, D.M., Silies, M.A., Norcia, A.M. and Clandinin, T.R. (2014). Flies and humans use a shared computational strategy that exploits natural scene statistics to estimate motion. Nature Neuroscience. 17:296-303.",
    link: "http://www.ncbi.nlm.nih.gov/pubmed/24390225",
    categories: ["Visual Computation"]
  },
  {
    citation: "Mann, K. and Clandinin, T.R. (2017). How Does Familiarity Breed Contempt? Cell. 169(5):775-776.",
    link: "",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Clandinin, T.R. and Marder, E. (2016). Editorial overview: Microcircuit evolution and computation. Curr Opin Neurobiol. 41:188-190.",
    link: "",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Wang, I.E. and Clandinin, T.R. (2016). The Influence of Wiring Economy on Nervous System Evolution. Curr Biol. 26(20):R1101-R1108.",
    link: "",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Clandinin, T.R. and Goodman, M.B. (2016). Grabbing brain activity on the go. Proc Natl Acad Sci U S A. 113(8):1965-7.",
    link: "",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Clandinin, T.R. and Giocomo, L.M. (2015). Internal compass puts flies in their place. Nature. 521(7551):165-6.",
    link: "",
    categories: ["Review & Perspective"]
  },
  {
    citation: "Silies, M., Gohl, D.M., and Clandinin, T.R. (2014). Motion detecting circuits in flies: coming into view. Annual Rev Neurosci. 37:307-327.",
    link: "",
    categories: ["Review & Perspective"]
  }
];
