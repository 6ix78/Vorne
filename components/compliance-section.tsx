"use client"

import { useState } from "react"
import { Shield, FileText, Award, CheckCircle, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const documents = [
  {
    id: 1,
    title: "Financial Services License",
    description: "Official license to operate as a regulated financial services provider",
    icon: Award,
    pdfUrl: "/documents/financial-license.pdf",
  },
  {
    id: 2,
    title: "AML/KYC Policy",
    description: "Anti-Money Laundering and Know Your Customer compliance documentation",
    icon: Shield,
    pdfUrl: "/documents/aml-kyc-policy.pdf",
  },
  {
    id: 3,
    title: "Terms of Service",
    description: "Complete terms and conditions for platform usage",
    icon: FileText,
    pdfUrl: "/documents/terms-of-service.pdf",
  },
  {
    id: 4,
    title: "Privacy Policy",
    description: "Data protection and privacy compliance documentation",
    icon: FileText,
    pdfUrl: "/documents/privacy-policy.pdf",
  },
]

const complianceFeatures = [
  "Registered with Financial Regulatory Authorities",
  "256-bit SSL Encryption",
  "Cold Storage for Digital Assets",
  "Regular Third-Party Audits",
  "Segregated Client Funds",
  "GDPR Compliant",
]

export function ComplianceSection() {
  const [selectedDoc, setSelectedDoc] = useState<typeof documents[0] | null>(null)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 font-medium">Fully Regulated Platform</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Regulated. Compliant.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Trusted.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            VornexChain operates under strict regulatory oversight, ensuring your investments 
            are protected by industry-leading security standards and legal compliance.
          </p>
        </div>

        {/* Compliance Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {complianceFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <doc.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedDoc(doc)}
                    className="border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Document
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-muted-foreground">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Licensed Operator</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-sm text-muted-foreground">Verified Platform</span>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[80vh] bg-card rounded-2xl border border-border overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <selectedDoc.icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">{selectedDoc.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* PDF Embed */}
            <div className="h-[calc(100%-60px)] bg-secondary/20">
              <iframe
                src={selectedDoc.pdfUrl}
                className="w-full h-full"
                title={selectedDoc.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
