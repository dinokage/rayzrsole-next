import React from 'react'
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Button,
  Hr,
  Font,
} from '@react-email/components'

interface WelcomeEmailProps {
  email: string
  siteUrl?: string
}

export default function WelcomeEmailTemplate({
  email,
  siteUrl = 'https://rayzrsole.com'
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Welcome to RayzrSole - Your AI journey begins!</Preview>

      <Body style={{
        backgroundColor: '#f8fafc',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <Container style={{
          margin: '0 auto',
          padding: '20px 0 48px',
          maxWidth: '560px'
        }}>

          {/* Header with Brand Background */}
          <Section style={{
            backgroundColor: '#2563eb',
            borderRadius: '12px 12px 0 0',
            padding: '48px 24px',
            textAlign: 'center'
          }}>
            <Heading style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 8px 0',
              lineHeight: '1.2'
            }}>
              Welcome to RayzrSole!
            </Heading>
            <Text style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0',
              lineHeight: '1.5'
            }}>
              Your AI journey begins soon...
            </Text>
          </Section>

          {/* Main Content Container */}
          <Section style={{
            backgroundColor: '#ffffff',
            borderRadius: '0 0 12px 12px',
            padding: '48px 32px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>

            {/* Success Icon and Title */}
            <Section style={{ textAlign: "center", marginBottom: "32px" }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                margin: "0 auto 24px",
                fontSize: "40px",
                color: "#ffffff",
                fontWeight: "bold",
                lineHeight: "80px",
                textAlign: "center",
                display: "block"
              }}>
                ✓
              </div>

              <Heading style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "#111827",
                margin: "0",
                lineHeight: "1.2"
              }}>
                You're All Set!
              </Heading>
            </Section>

            {/* Welcome Message */}
            <Text style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#4b5563',
              margin: '0 0 32px 0',
              textAlign: 'center'
            }}>
              Thank you for your interest in RayzrSole! We're building the next generation of
              AI & ML solutions to transform industries. We're thrilled to have you on board.
            </Text>

            {/* Features Section */}
            <Section style={{
              backgroundColor: '#f1f5f9',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <Heading style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}>
                🚀 What's Coming Next?
              </Heading>

              <Section style={{ marginBottom: '12px' }}>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  🤖 Cutting-edge AI & ML solutions for your business
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  📊 Intelligent data analytics and automation tools
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0 0 8px 0'
                }}>
                  ⚡ Industry-specific AI models and integrations
                </Text>
                <Text style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#475569',
                  margin: '0'
                }}>
                  🤝 Dedicated support from our expert AI team
                </Text>
              </Section>
            </Section>

            {/* Launch Date Notice */}
            <Section style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '32px'
            }}>
              <Text style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#1e40af',
                margin: '0',
                lineHeight: '1.5',
                textAlign: 'center'
              }}>
                📅 <strong>Mark Your Calendar:</strong> We're launching on June 15, 2026 at 11:00 AM IST
              </Text>
            </Section>

            {/* Launch Message */}
            <Text style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#4b5563',
              margin: '0 0 32px 0',
              textAlign: 'center'
            }}>
              We'll send you an exclusive early access invitation as soon as we're ready to launch.
              Get ready to be part of something extraordinary!
            </Text>

            {/* CTA Button */}
            <Section style={{ textAlign: 'center' }}>
              <Button
                href={siteUrl}
                style={{
                  backgroundColor: '#2563eb',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'inline-block',
                  padding: '14px 32px',
                  border: 'none'
                }}
              >
                Visit Our Website
              </Button>
            </Section>
          </Section>

          {/* Spacer */}
          <Section style={{ height: '32px' }}></Section>

          {/* Footer */}
          <Section style={{
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            padding: '32px 24px',
            textAlign: 'center'
          }}>
            <Text style={{
              fontSize: '14px',
              color: '#6b7280',
              margin: '0 0 16px 0',
              lineHeight: '1.5'
            }}>
              Follow us for updates:
            </Text>

            {/* Social Links */}
            <Section style={{ marginBottom: '24px' }}>
              <Row>
                <Column align="center">
                  <Link
                    href="https://facebook.com/rayzrsole"
                    style={{
                      color: '#2563eb',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      margin: '0 12px'
                    }}
                  >
                    Facebook
                  </Link>
                </Column>
                <Column align="center">
                  <Link
                    href="https://twitter.com/rayzrsole"
                    style={{
                      color: '#2563eb',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      margin: '0 12px'
                    }}
                  >
                    Twitter
                  </Link>
                </Column>
                <Column align="center">
                  <Link
                    href="https://instagram.com/rayzrsole"
                    style={{
                      color: '#2563eb',
                      fontSize: '14px',
                      fontWeight: '500',
                      textDecoration: 'none',
                      margin: '0 12px'
                    }}
                  >
                    Instagram
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr style={{
              borderColor: '#e5e7eb',
              margin: '24px 0'
            }} />

            <Text style={{
              fontSize: '12px',
              color: '#9ca3af',
              margin: '0 0 8px 0',
              lineHeight: '1.4'
            }}>
              RayzrSole - Kolkata, West Bengal, India
            </Text>

            <Text style={{
              fontSize: '12px',
              color: '#9ca3af',
              margin: '0 0 4px 0',
              lineHeight: '1.4'
            }}>
              rayzrsole.office@gmail.com · +91 6291 858 320
            </Text>

            <Text style={{
              fontSize: '12px',
              color: '#9ca3af',
              margin: '0',
              lineHeight: '1.4'
            }}>
              If you didn't sign up for this, you can safely ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
